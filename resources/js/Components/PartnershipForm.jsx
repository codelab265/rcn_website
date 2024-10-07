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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Checkbox } from "./ui/checkbox";

function PartnershipForm() {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        country: "",
        communication_mode: "",
        whatsapp: "",
        agreement: "",
        form_of_partnership: [],
        month_of_commencement: "",
        currency_category: "",
        partnership_frequency: "",
        amount: "",
    });

    const Months = [
        {
            id: "january",
            name: "January",
        },
        {
            id: "february",
            name: "February",
        },
        {
            id: "march",
            name: "March",
        },
        {
            id: "april",
            name: "April",
        },
        {
            id: "may",
            name: "May",
        },
        {
            id: "june",
            name: "June",
        },
        {
            id: "july",
            name: "July",
        },
        {
            id: "august",
            name: "August",
        },
        {
            id: "september",
            name: "September",
        },
        {
            id: "october",
            name: "October",
        },
        {
            id: "november",
            name: "November",
        },
        {
            id: "december",
            name: "December",
        },
    ];

    const FormOfPartnership = [
        {
            id: "skills",
            name: "Skills",
        },
        {
            id: "finance",
            name: "Finance",
        },
    ];

    const Currencies = [
        {
            id: "gbp",
            name: "GBP",
        },
        {
            id: "usd",
            name: "USD",
        },
        {
            id: "eur",
            name: "EUR",
        },
        {
            id: "ngn",
            name: "NGN",
        },
    ];

    const Frequencies = [
        {
            id: "Bi-weekly",
            name: "Bi-weekly",
        },
        {
            id: "monthly",
            name: "Monthly",
        },
        {
            id: "Bi-monthly",
            name: "Bi-monthly",
        },
        {
            id: "quarterly",
            name: "Quarterly",
        },
        {
            id: "annually",
            name: "Annually",
        },
    ];

    const handleCheckboxChange = (value) => {
        let updatedForm = [...data.form_of_partnership];

        // If the value is already selected, remove it
        if (updatedForm.includes(value)) {
            updatedForm = updatedForm.filter((item) => item !== value);
        } else {
            // If the value is not selected, add it
            updatedForm.push(value);
        }

        // Update the form_of_partnership data using setData
        setData("form_of_partnership", updatedForm);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("partnership"), {
            onSuccess: () => {
                reset();
                setOpen(false);
                toast.success("Membership form submitted successfully");
            },
            onError: () => {
                toast.error(
                    "An error occurred, Please check if all required fields are filled"
                );
            },
            preserveScroll: true,
        });
    };

    return (
        <div className="">
            <Button
                className="rounded-full py-4 px-6 font-Gilroy font-semibold text-sm sm:text-base mt-[30px]"
                onClick={() => setOpen(true)}
            >
                Become a Partner
            </Button>
            <Modal show={open} onClose={() => setOpen(false)} maxWidth="4xl">
                <ScrollArea className="w-full p-14 h-[550px]">
                    <div className="">
                        <div className="text-[#dddddd] text-9xl font-normal font-abhaya leading-[102.40px]">
                            Partneship <br />
                            Form
                        </div>
                        <div className="flex flex-col mt-[60px] gap-5">
                            {page === 0 ? (
                                <>
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
                                                setData(
                                                    "phone_number",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.phone_number}
                                        />
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
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
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
                                        <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                            Country
                                        </Label>
                                        <TextInput
                                            className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                            placeholder="country"
                                            value={data.country}
                                            onChange={(e) =>
                                                setData(
                                                    "country",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError message={errors.country} />
                                    </div>
                                    <div className="">
                                        <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                            Form of Partnership
                                        </Label>
                                        <div className="w-full mt-2">
                                            {FormOfPartnership.map((form) => (
                                                <div className="flex items-center">
                                                    <Checkbox
                                                        checked={data.form_of_partnership.includes(
                                                            form.name
                                                        )}
                                                        onCheckedChange={() =>
                                                            handleCheckboxChange(
                                                                form.name
                                                            )
                                                        }
                                                        id={form.id}
                                                    />
                                                    <div className="ml-2">
                                                        <Label
                                                            className="font-inter text-lg text-black leading-[25px] mb-2 font-normal"
                                                            htmlFor={form.id}
                                                        >
                                                            {form.name}
                                                        </Label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <InputError
                                            message={errors.form_of_partnership}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="">
                                        <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                            Month of Commencement
                                        </Label>
                                        <Select
                                            defaultValue={
                                                data.month_of_commencement
                                            }
                                            onValueChange={(value) =>
                                                setData(
                                                    "month_of_commencement",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]">
                                                <SelectValue placeholder="Select Month of Commencement" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Months.map((month) => (
                                                    <SelectItem
                                                        key={month.id}
                                                        value={month.name}
                                                    >
                                                        {month.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={
                                                errors.month_of_commencement
                                            }
                                        />
                                    </div>
                                    <div className="">
                                        <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                            Currency Category*
                                        </Label>
                                        <RadioGroup
                                            defaultValue={
                                                data.currency_category
                                            }
                                            className="mt-2"
                                            value={data.currency_category}
                                            onValueChange={(value) =>
                                                setData(
                                                    "currency_category",
                                                    value
                                                )
                                            }
                                        >
                                            {Currencies.map((currency) => (
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value={currency.name}
                                                        id={currency.id}
                                                    />
                                                    <Label
                                                        htmlFor={currency.id}
                                                        className="font-inter text-lg text-black leading-[25px] font-normal"
                                                    >
                                                        {currency.name}
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                        <InputError
                                            message={errors.currency_category}
                                        />
                                    </div>

                                    <div className="">
                                        <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                            Partnership Frequency*
                                        </Label>
                                        <RadioGroup
                                            defaultValue={
                                                data.partnership_frequency
                                            }
                                            className="mt-2"
                                            value={data.partnership_frequency}
                                            onValueChange={(value) =>
                                                setData(
                                                    "partnership_frequency",
                                                    value
                                                )
                                            }
                                        >
                                            {Frequencies.map((frequency) => (
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value={frequency.name}
                                                        id={frequency.id}
                                                    />
                                                    <Label
                                                        htmlFor={frequency.id}
                                                        className="font-inter text-lg text-black leading-[25px] font-normal"
                                                    >
                                                        {frequency.name}
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                        <InputError
                                            message={
                                                errors.partnership_frequency
                                            }
                                        />
                                    </div>

                                    <div className="">
                                        <Label className="font-inter text-lg text-black leading-[25px] mb-2 font-normal">
                                            Amount*
                                        </Label>
                                        <TextInput
                                            className="w-full mt-2 text-lg font-inter placeholder:text-[#d2d2d2]"
                                            placeholder="Amount"
                                            value={data.amount}
                                            onChange={(e) =>
                                                setData(
                                                    "amount",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError message={errors.amount} />
                                    </div>

                                    <div className="">
                                        <Label className="font-inter text-lg text-black leading-[25px] font-normal">
                                            Preferred Mode of Communication
                                        </Label>
                                        <RadioGroup
                                            defaultValue={
                                                data.communication_mode
                                            }
                                            className="mt-2"
                                            value={data.communication_mode}
                                            onValueChange={(value) =>
                                                setData(
                                                    "communication_mode",
                                                    value
                                                )
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
                                                <RadioGroupItem
                                                    value="SMS"
                                                    id="SMS"
                                                />
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
                                                <RadioGroupItem
                                                    value="Yes"
                                                    id="yes_"
                                                />
                                                <Label
                                                    htmlFor="yes_"
                                                    className="text-lg font-inter text-black font-normal"
                                                >
                                                    Yes
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="No"
                                                    id="No"
                                                />
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
                                            therefore consent for my information
                                            to be on file in accordance with the
                                            GDPR*
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
                                                <RadioGroupItem
                                                    value="Yes"
                                                    id="yes"
                                                />
                                                <Label
                                                    htmlFor="yes"
                                                    className="font-inter text-lg text-black font-normal"
                                                >
                                                    Yes
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="No"
                                                    id="No"
                                                />
                                                <Label
                                                    htmlFor="No"
                                                    className="font-inter text-lg text-black font-normal"
                                                >
                                                    No
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                        <InputError
                                            message={errors.agreement}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="flex items-center gap-4 mt-10">
                                {page == 0 ? (
                                    <Button
                                        className="rounded-full h-14 py-2.5 px-[30px] text-center text-gray-500 text-lg font-normal font-['Inter'] leading-9 border border-[#5e5bff] bg-white"
                                        onClick={() => setPage(1)}
                                    >
                                        Next
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            className="rounded-full h-14 py-2.5 px-[30px] text-center text-gray-500 text-lg font-normal font-['Inter'] leading-9 border border-[#5e5bff] bg-white"
                                            onClick={() => setPage(0)}
                                        >
                                            Back
                                        </Button>
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
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </Modal>
        </div>
    );
}

export default PartnershipForm;
