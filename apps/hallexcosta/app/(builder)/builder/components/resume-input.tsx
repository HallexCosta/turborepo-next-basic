'use client'
import {Label, Select, TextInput} from "flowbite-react";
import {memo, useEffect} from "react";
import {Resume, useResume} from "../stores/resume-store";
import {DeepPartial} from "flowbite-react/lib/esm/types";
import _ from "lodash";

type ResumeInputProps = {
    label: string
    tag: string
    data?: DeepPartial<Resume>
    value: string
    placeholder: string
    onChange?: void
    updateState?: void
    selectOptions?: string[]
}

const ResumeInput = memo((props: ResumeInputProps) => {
    const {resume, updateResume} =  useResume()

    const handleUpdateResume = (value: string) => {
        updateResume(createUpdateResumeData(props.tag, value))
    }
    const createUpdateResumeData = (tag: string, value: string) => {
        const updatedResume: DeepPartial<Resume> = {}
        _.set(updatedResume, tag, value)

        console.log({updatedResume})
        return updatedResume
    }
    const handleWorkExperiences = () => {

    }

    useEffect(() => {
        console.log({loadash: _.get(resume, props.tag)})
        updateResume(createUpdateResumeData(props.tag, props.value))
    }, [])

    return (
        <div>
            <Label>{props.label}</Label>

            {props.selectOptions?.length && (
                <Select
                    onChange={(e) => handleUpdateResume(e.target.value)}
                >
                    {props.selectOptions.map((selectOption, index) => <option key={index}>{selectOption}</option>)}
                    {/*<option>Tempo integral</option>*/}
                    {/*<option>Meio periodo</option>*/}
                    {/*<option>Estagio</option>*/}
                    {/*<option>Ensino</option>*/}
                    {/*<option>Projeto</option>*/}
                </Select>
            )}
            {!props.selectOptions?.length && (
                <TextInput
                    onChange={(e) => handleUpdateResume(e.target.value)}
                    placeholder={props.placeholder}
                    value={_.get(resume, props.tag) ?? ''}
                />
            )}
        </div>
    )
})

export { ResumeInput }