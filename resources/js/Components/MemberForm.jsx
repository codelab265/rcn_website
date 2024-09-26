import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "./ui/button";
import Modal from "./Modal";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import { useForm } from "@inertiajs/react";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { toast } from "sonner";

function MemberForm() {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        postal_code: "",
        communication_mode: "",
        whatsapp: "",
        agreement: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("membership"), {
            onSuccess: () => {
                reset();
                setOpen(false);
                toast.success("Membership form submitted successfully");
            },
            preserveScroll: true,
        });
    };
    return (
        <div className="">
            <Button
                className="rounded-full py-4 px-6 font-Gilroy font-semibold text-sm sm:text-base"
                onClick={() => setOpen(true)}
            >
                Become a Member
            </Button>
            <Modal show={open} onClose={() => setOpen(false)} maxWidth="4xl">
                <ScrollArea className="w-full p-16 h-[650px]">
                    <div className="">
                        <div className="text-[#dddddd] text-9xl font-normal font-abhaya leading-[102.40px]">
                            Membership <br />
                            Form
                        </div>
                        <div className="flex flex-col mt-[60px] gap-5">
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                    Name (First name & Last Name)*
                                </Label>
                                <TextInput
                                    className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                    placeholder="Name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                    Email*
                                </Label>
                                <TextInput
                                    className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                    Phone Number*
                                </Label>
                                <TextInput
                                    className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                    placeholder="Phone"
                                    value={data.phone_number}
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                />
                                <InputError message={errors.phone_number} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                    Address*
                                </Label>
                                <Textarea
                                    className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                    placeholder="Address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                <InputError message={errors.address} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                    City
                                </Label>
                                <TextInput
                                    className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                    placeholder="City"
                                    value={data.city}
                                    onChange={(e) =>
                                        setData("city", e.target.value)
                                    }
                                />
                                <InputError message={errors.city} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] font-normal">
                                    Postal Code
                                </Label>
                                <TextInput
                                    className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                    placeholder="Postal Code"
                                    value={data.postal_code}
                                    onChange={(e) =>
                                        setData("postal_code", e.target.value)
                                    }
                                />
                                <InputError message={errors.postal_code} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] font-normal">
                                    Preferred Mode of Communication
                                </Label>
                                <RadioGroup
                                    defaultValue={data.communication_mode}
                                    className="mt-2"
                                    value={data.communication_mode}
                                    onValueChange={(value) =>
                                        setData("communication_mode", value)
                                    }
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="Phone Calls"
                                            id="PhoneCalls"
                                        />
                                        <Label
                                            htmlFor="PhoneCalls"
                                            className="font-inter text-lg text-black leading-[25px] font-normal"
                                        >
                                            Phone Calls
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="SMS" id="SMS" />
                                        <Label
                                            htmlFor="SMS"
                                            className="font-inter text-lg text-black leading-[25px] font-normal"
                                        >
                                            SMS
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="Email"
                                            id="Email"
                                        />
                                        <Label
                                            htmlFor="Email"
                                            className="font-inter text-lg text-black leading-[25px] font-normal"
                                        >
                                            Email
                                        </Label>
                                    </div>
                                </RadioGroup>
                                <InputError
                                    message={errors.communication_mode}
                                />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] font-normal">
                                    Would you like to join our Whatsapp
                                    platform?*
                                </Label>
                                <RadioGroup
                                    defaultValue={data.whatsapp}
                                    className="mt-2"
                                    value={data.whatsapp}
                                    onValueChange={(value) =>
                                        setData("whatsapp", value)
                                    }
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Yes" id="yes_" />
                                        <Label
                                            htmlFor="yes_"
                                            className="text-lg font-inter text-black font-normal"
                                        >
                                            Yes
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="No" id="No" />
                                        <Label
                                            htmlFor="No"
                                            className="text-lg font-inter text-black font-normal"
                                        >
                                            No
                                        </Label>
                                    </div>
                                </RadioGroup>
                                <InputError message={errors.whatsapp} />
                            </div>
                            <div className="">
                                <Label className="font-inter text-lg text-black leading-[25px] font-normal">
                                    I agree to opt into RCN London's
                                    communication and announcements and
                                    therefore consent for my information to be
                                    on file in accordance with the GDPR*
                                </Label>
                                <RadioGroup
                                    defaultValue={data.agreement}
                                    className="mt-2"
                                    value={data.agreement}
                                    onValueChange={(value) =>
                                        setData("agreement", value)
                                    }
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Yes" id="yes" />
                                        <Label
                                            htmlFor="yes"
                                            className="font-inter text-lg text-black font-normal"
                                        >
                                            Yes
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="No" id="No" />
                                        <Label
                                            htmlFor="No"
                                            className="font-inter text-lg text-black font-normal"
                                        >
                                            No
                                        </Label>
                                    </div>
                                </RadioGroup>
                                <InputError message={errors.agreement} />
                            </div>
                            <div className="">
                                <Button
                                    className="rounded-full h-14 py-2.5 px-[30px] text-center text-white text-lg font-normal font-['Inter'] leading-9 bg-[#5e5bff] "
                                    disabled={
                                        processing ||
                                        !data.agreement ||
                                        data.agreement === "No"
                                    }
                                    onClick={submit}
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </Modal>
        </div>
    );
}

export default MemberForm;
