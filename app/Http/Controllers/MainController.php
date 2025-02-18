<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Contact;
use App\Models\Event;
use App\Models\Membership;
use App\Models\Partnership;
use App\Models\Policy;
use App\Models\Programme;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends BaseController
{

    public function home()
    {
        $this->events = EventResource::collection(Event::query()->latest()->take(3)->get());
        return Inertia::render('Home', $this->data);
    }


    public function about()
    {
        return Inertia::render('About', $this->data);
    }

    public function store()
    {
        return Inertia::render('Store', $this->data);
    }



    public function programmes()
    {
        return Inertia::render('Programmes', $this->data);
    }

    public function contact()
    {
        return Inertia::render('Contact', $this->data);
    }

    public function contactStore(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ];

        Contact::create($data);
        return redirect()->back();
    }
    public function subscribe(Request $request)
    {
        $email = $request->input('email');

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Valid email
            $subscriber = Subscriber::where('email', $email)->first();
            if (!$subscriber) {
                $subscriber = new Subscriber();
                $subscriber->email = $email;
                $subscriber->save();
            }
        }

        return redirect()->back();
    }

    public function unsubscribe(Request $request)
    {
        $email = $request->input('email');
        $subscriber = Subscriber::where('email', $email)->first();
        if ($subscriber) {
            $subscriber->delete();
        }
        return redirect()->back();
    }


    public function membership(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:memberships,email',
            'phone_number' => 'required|unique:memberships,phone_number',
            'communication_mode' => 'required',
            'city' => 'required',
            'postal_code' => 'required',
            'address' => 'required',
            'whatsapp' => 'required',
            'agreement' => 'required'

        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'communication_mode' => $request->communication_mode,
            'city' => $request->city,
            'postal_code' => $request->postal_code,
            'address' => $request->address,
            'whatsapp' => $request->whatsapp,
            'agreement' => $request->agreement
        ];
        Membership::create($data);
        return redirect()->back();
    }

    public function partnershipStore(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:partnerships,email',
            'phone_number' => 'required|unique:partnerships,phone_number',
            'communication_mode' => 'required',
            'city' => 'required',
            'country' => 'required',
            'address' => 'required',
            'whatsapp' => 'required',
            'agreement' => 'required',
            'currency_category' => 'required',
            'amount' => 'required',
            'form_of_partnership' => 'required',
            'month_of_commencement' => 'required',
            'partnership_frequency' => 'required'
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'communication_mode' => $request->communication_mode,
            'city' => $request->city,
            'country' => $request->country,
            'address' => $request->address,
            'whatsapp' => $request->whatsapp,
            'agreement' => $request->agreement,
            'currency' => $request->currency_category,
            'amount' => $request->amount,
            'form_of_partnership' => implode(',', $request->form_of_partnership),
            'month_of_commencement' => $request->month_of_commencement,
            'partnership_frequency' => $request->partnership_frequency
        ];
        Partnership::create($data);
        return redirect()->back();
    }

    public function partnership()
    {
        return Inertia::render('Partnership', $this->data);
    }

    public function policy($id)
    {
        $this->policy = Policy::find($id);
        return Inertia::render('Policy', $this->data);
    }
}
