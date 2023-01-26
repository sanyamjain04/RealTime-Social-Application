import { ReactNode } from "react";
import { FormProvider as Form } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form/dist/types";

type FormProviderProps = {
  children: ReactNode;
  onSubmit: () => void;
  methods: UseFormReturn
};

const FormProvider = ({ children, onSubmit, methods }: FormProviderProps) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
