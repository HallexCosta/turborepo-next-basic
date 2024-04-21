"use client";
import { Label, Textarea, TextInput } from "flowbite-react";
import { memo, useEffect } from "react";
import { Resume, useResume } from "../stores/resume-store";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import _ from "lodash";

type ResumeTextareaProps = {
  title?: string;
  label?: string;
  tag: string;
  value: string;
  placeholder: string;
};

const ResumeTextarea = memo((props: ResumeTextareaProps) => {
  const { resume, updateResume } = useResume();

  const handleUpdateResume = (value: string) => {
    updateResume(createUpdateResumeData(props.tag, value));
  };
  const createUpdateResumeData = (tag: string, value: string) => {
    const updatedResume: DeepPartial<Resume> = {};
    _.set(updatedResume, tag, value);

    console.log({ updatedResume });
    return updatedResume;
  };
  useEffect(() => {
    console.log({ loadash: _.get(resume, props.tag) });
    updateResume(createUpdateResumeData(props.tag, props.value));
  }, []);

  return (
    <div>
      {props.title && (
        <legend className="mb-4 text-xl text-white font-bold">
          {props.title}
        </legend>
      )}
      {props.label && <Label>{props.label}</Label>}
      <Textarea
        onChange={(e) => handleUpdateResume(e.target.value)}
        placeholder={props.placeholder}
        value={_.get(resume, props.tag) ?? ""}
        className="p-2.5"
        rows={10}
      />
    </div>
  );
});
ResumeTextarea.displayName = "ResumeTextarea";
export { ResumeTextarea };
