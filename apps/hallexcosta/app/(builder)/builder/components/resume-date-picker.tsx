"use client";
import { Datepicker, Label, Select, TextInput } from "flowbite-react";
import { memo, useEffect } from "react";
import { Resume, useResume } from "../stores/resume-store";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import _ from "lodash";

type ResumeDatePickerProps = {
  label: string;
  tag: string;
  data?: DeepPartial<Resume>;
  value: Date;
  disabled?: boolean;
  onChange?: void;
  updateState?: void;
  options?: string[];
};

const ResumeDatePicker = memo((props: ResumeDatePickerProps) => {
  const limitDate = new Date();
  const lastDayFromMonth = new Date(
    limitDate.getFullYear(),
    limitDate.getMonth() + 1,
    0
  ).getDate();

  const { resume, updateResume } = useResume();

  const handleUpdateResume = (value: Date) => {
    updateResume(createUpdateResumeData(props.tag, value));
  };
  const createUpdateResumeData = (tag: string, value: Date) => {
    const updatedResume: DeepPartial<Resume> = {};
    _.set(updatedResume, tag, value);

    console.log({ updatedResume });
    return updatedResume;
  };

  useEffect(() => {
    console.log(new Date("2023-05-16T03:00:00.000Z"));
    console.log({ loadash: _.get(resume, props.tag) });
    updateResume(createUpdateResumeData(props.tag, props.value));
  }, []);

  return (
    <div>
      <Label>{props.label}</Label>

      <Datepicker
        disabled={props.disabled}
        maxDate={
          new Date(
            limitDate.getFullYear(),
            limitDate.getMonth(),
            lastDayFromMonth
          )
        }
        language="pt-BR"
        labelTodayButton="Hoje"
        labelClearButton="Limpar"
        weekStart={0}
        autoHide={false}
        defaultDate={props.value}
        onSelectedDateChanged={(date: Date) => handleUpdateResume(date)}
      />
    </div>
  );
});
ResumeDatePicker.displayName = "ResumeDatePicker";

export { ResumeDatePicker };
