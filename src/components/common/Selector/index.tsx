// import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectorProps {
    placeholder?: string;
}

export const Selector = ({ placeholder }: SelectorProps) => {
    return (
        <Select>
            <SelectTrigger className="placeholder:text-lightGray">
                <SelectValue placeholder={placeholder} className="placeholder-lightGreen" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border border-lightGray">
                <SelectGroup>
                    <SelectItem value="apple">1일</SelectItem>
                    <SelectItem value="banana">1주일</SelectItem>
                    <SelectItem value="blueberry">한 달</SelectItem>
                    <SelectItem value="grapes">1년</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
