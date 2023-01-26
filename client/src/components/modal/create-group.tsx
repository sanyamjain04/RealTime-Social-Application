import Input from '@components/ui/Input';
import React from 'react';
import DialogModal from 'src/lib/DialogModal';

type CreateGroupProps = {
  open: boolean;
  closeModal: () => void;
  openModal: () => void;
};

const CreateGroup = ({ open, closeModal, openModal }: CreateGroupProps) => {
  return (
    <DialogModal
      title="Create New Group"
      closeModal={closeModal}
      open={open}
      closeButtonTitle="Close"
    >
      <div className="flex flex-col">
        <Input label="Group name" name="name" />
      </div>
    </DialogModal>
  );
};

export default CreateGroup;
