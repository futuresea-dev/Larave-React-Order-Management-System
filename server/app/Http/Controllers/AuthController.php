<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // User Regisger
    public function register(Request $request) {

        $fields = $request->validate([
            'name' => 'required|string',
            'role' => 'string',
            'email' => 'required|email',
            'password' => [
                'required',
                'confirmed',
                'min:5', // Minimum of 5 characters
                'regex:/[A-Z]/', // At least one uppercase letter
                'regex:/[a-z]/', // At least one lowercase letter
                'regex:/[0-9]/', // At least one numeric digit
            ],
        ]);
        $user = new User();
        $user->name = $fields['name'];
        $user->email = $fields['email'];
        $user->role = $fields['role'] ?? 'user';
        $user->password = bcrypt($fields['password']);
        $user->save();

        $token = $user->createToken('myAppToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }


    // User Login
    public function login(Request $request) {

        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Checking email
        $user = User::where('email', $fields['email'])->first();

        // Checking password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Invalid email or password'
            ], 401);
        }

        $token = $user->createToken('myAppToken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }


    // User Logout
    public function logout(Request $request): array
    {
        $request->user()->currentAccessToken()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
