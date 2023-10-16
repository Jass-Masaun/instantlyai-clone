'use client';

import React, { useState, useEffect } from 'react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

import { Input } from '@/components/ui/input';

import { login } from '@/utils/api/auth';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  username: z.string().min(3, {
    message: 'Email must be at least 2 characters.',
  }),
  password: z.string(),
});

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data) => {
    login({ payload: data, setLoading, toast, router });
  };

  return (
    <div className='flex flex-1 justify-center items-center'>
      <div className='w-[320px]'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-1 flex-col gap-5'
          >
            <FormField
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Enter username...' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Enter password...'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={loading}>
              {loading && <Loader2 className='mr-1 w-6 h-6 animate-spin' />}
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
