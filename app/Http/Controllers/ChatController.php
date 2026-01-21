<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $apiKey = env('OPENAI_API_KEY');
        if (!$apiKey) {
            return response()->json(['error' => 'OpenAI API key not configured.'], 500);
        }

        $payload = $request->only('messages'); // expects messages array like OpenAI chat format
        $response = Http::withToken($apiKey)->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-3.5-turbo', // or another model you prefer
            'messages' => $payload['messages'] ?? [],
            'max_tokens' => 400,
        ]);

        return response()->json($response->json(), $response->status());
    }
}