import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ id, placeholder, ...props }) => {
  return <textarea id={id} placeholder={placeholder} {...props} className="border rounded-md p-2 w-full min-h-[100px]" />;
};
