<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Image;
use App\Models\Product;
use App\Models\Thumbnail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        // get all products
        //
        $products = Product::with('thumbnail')->get();

        return response()->json($products);

    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreProductRequest  $request
     * @return Response
     */
    public function store(Request $request): Response
    {
        // validate request data
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
            'category' => 'required|string',
            'brand' => 'required|string',
            'shipping' => 'boolean',
            // 'colors' => 'string',
            'sku' => 'string',
            // 'thumbnail' => 'required|image'
        ]);


        // get the request images
        if ($request->has('images')) {

            $baseUrl = env('APP_URL') . '/storage/';
            // store the data in the products table
            $product = Product::create($fields);
            $id = $product->id;

            // store the thumbnail in s3
            $thumbnail = $request->file('thumbnail');
            $tnName = $id.'_thumbnail_'.time().rand(1, 1000).'.'.$thumbnail->extension();
            $path = $thumbnail->storeAs('uploads/products/' . $id, $tnName, 'public'); //
            // store the thumbnail in thumbnails table
            $t = new Thumbnail();
            $t->product_id = $id;
            $t->thumbnail = $baseUrl . $path;
            $t->save();
            // store the thumbnail in images table
            $image = new Image();
            $image->product_id = $id;
            $image->image = $path;
            $image->save();


            $images = $request->file('images');

            // loop through the images
            foreach($images as $image) {
                // // store the data in the products table
                // $product = Product::create($fields);

                $imageName= $id.'_image_'.time().rand(1,1000).'.'.$image->extension();

                // store the images in s3
                $path = $image->storeAs('uploads/products/' . $id, $imageName, 'public'); //
                // store the images in the images table
                $newImage = new Image();
                $newImage->product_id = $id;
                $newImage->image = $baseUrl . $path;
                $newImage->save();
            }
        }

        $response = [
            'message' => 'Product created'
        ];

        return response($response, 201);

    }


    // GET a Single Product Function
    public function getProduct($id) {
        $product = Product::find($id);
        if (!$product){
            return response([
                'message' => 'No Product with the ID: '.$id
            ], 401);
        }
        // $images = $product->images;
        $product->images;
        return response($product, 200);
    }




    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateProductRequest  $request
     * @param Product $product
     * @return Response
     */
    public function update(Request $request): Response
    {
        return Product::find($request->id)->update($request->all());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return int
     */
    public function destroy($id): int
    {
        return Product::destroy($id);

    }
}
