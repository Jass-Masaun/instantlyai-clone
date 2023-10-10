'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '../ui/scroll-area';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';

const Combobox = ({
  btnTitle = 'Button',
  contentClassName = '',
  searchPlaceholder = 'Search...',
  notFoundText = 'Data not found',
  scrollClassName = 'h-[200px] w-auto',
  selectionType = 'single',
  showSearch = true,
  popoverContent = [],
  value = {},
  setValue = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [commandInputValue, setCommandInputValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Command>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='justify-between'
          >
            {btnTitle}
            <div className='border-l border-gray-300 ml-3'>
              <MdKeyboardArrowDown className='ml-2 text-2xl shrink-0 opacity-50' />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className={`w-auto p-0 ${contentClassName}`}>
          {showSearch && (
            <CommandInput
              placeholder={searchPlaceholder}
              value={commandInputValue}
              onValueChange={setCommandInputValue}
            />
          )}
          <CommandEmpty>{notFoundText}</CommandEmpty>
          <CommandGroup>
            <ScrollArea className={scrollClassName}>
              {selectionType === 'single' &&
                popoverContent.map((content) => (
                  <CommandItem
                    key={content.label}
                    onSelect={() => {
                      setValue(content);
                      setCommandInputValue('');
                      setOpen(false);
                    }}
                  >
                    <FiCheck
                      className={cn(
                        'mr-2 h-4 w-4',
                        value?.value === content.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                    {content.label}
                  </CommandItem>
                ))}
              {selectionType === 'multiple' && <div>multiple</div>}
              {selectionType === 'no-selection' && <div>No Selection</div>}
            </ScrollArea>
          </CommandGroup>
        </PopoverContent>
      </Command>
    </Popover>
  );
};

export default Combobox;
