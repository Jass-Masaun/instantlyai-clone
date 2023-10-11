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

import { FiCheck } from 'react-icons/fi';

const Combobox = ({
  btn = { btnVariant: 'outline', btnChild: '', btnClassName: '' },
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
            variant={btn.btnVariant || 'outline'}
            role='combobox'
            aria-expanded={open}
            className={cn('justify-between', btn.btnClassName)}
          >
            {btn.btnChild ? btn.btnChild : 'Button'}
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
                    className={content?.className || ''}
                  >
                    {content?.icon ? (
                      content.icon
                    ) : (
                      <FiCheck
                        className={cn(
                          'mr-2 h-4 w-4',
                          value?.value === content.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    )}
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
