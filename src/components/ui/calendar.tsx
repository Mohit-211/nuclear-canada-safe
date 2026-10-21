"use client";

import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { DayButton, DayPicker, type ChevronProps, type DayButtonProps } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      navLayout="around"
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "relative space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "absolute left-1 top-0 z-10 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-1 top-0 z-10 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
        range_start: "day-range-start rounded-l-md bg-accent",
        range_middle: "bg-accent",
        range_end: "day-range-end rounded-r-md bg-accent",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: CalendarChevron,
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

const chevronIcons = { left: ChevronLeft, right: ChevronRight, up: ChevronUp, down: ChevronDown };

function CalendarChevron({ orientation = "left", className }: ChevronProps) {
  const Icon = chevronIcons[orientation];
  return <Icon className={cn("h-4 w-4", className)} />;
}

// react-day-picker v9 sets day state (selected, today, ...) on the cell, so the button styles are applied here.
// Wraps the default DayButton, which moves focus to the active day during keyboard navigation.
function CalendarDayButton({ className, modifiers, ...props }: DayButtonProps) {
  return (
    <DayButton
      modifiers={modifiers}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal",
        modifiers.today && "bg-accent text-accent-foreground",
        modifiers.selected &&
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        modifiers.range_middle && "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground",
        modifiers.outside && "text-muted-foreground opacity-50",
        modifiers.outside && modifiers.selected && "bg-accent/50 text-muted-foreground opacity-30",
        modifiers.disabled && "text-muted-foreground opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Calendar };
