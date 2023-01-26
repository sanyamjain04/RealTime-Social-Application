import { Alert } from '@mui/material';

type ErrorMessagesProps = {
  [key: string]: {
    message: string;
    type: string;
    ref: unknown;
  };
};

export default function ErrorMessages({
  errors,
}: {
  errors: ErrorMessagesProps;
}) {
  return (
    <>
      {Object.entries(errors).length > 0 && (
        <Alert severity="error" className="mb-1">
          {Object.entries(errors).map((err) => (
            <p key={err[0]}>{err[1].message}</p>
          ))}
        </Alert>
      )}
    </>
  );
}
