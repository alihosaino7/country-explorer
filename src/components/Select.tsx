import { useState, memo, useRef, useEffect } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { nanoid } from 'nanoid';

interface SelectProps {
   onChange: (region: string) => void;
   value: string;
}

type Option = {
   value: string;
   label: string;
};

const options: Option[] = [
   { value: 'Africa', label: 'Africa' },
   { value: 'America', label: 'America' },
   { value: 'Asia', label: 'Asia' },
   { value: 'Europe', label: 'Europe' },
   { value: 'Oceania', label: 'Oceania' },
];

const Select: React.FC<SelectProps> = memo(({ value, onChange }) => {
   const [isOpen, setIsOpen] = useState(false);
   const selectRef = useRef<HTMLDivElement>(null);

   const toggleMenu = (): void => {
      setIsOpen((prev) => !prev);
   };

   const handleItemClick = (region: string): void => {
      onChange(region);
      setIsOpen(false);
   };

   const handleSelectClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      toggleMenu();
   };

   const handleOptionMouseDown = (region: string) => {
      handleItemClick(region);
   };

   const handleBlur = (): void => setIsOpen(false);

   const handleDocumentClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
         handleBlur();
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleDocumentClick);
      return () => {
         document.removeEventListener('mousedown', handleDocumentClick);
      };
   }, []);

   return (
      <div ref={selectRef} className="relative">
         <div
            className="flex justify-between items-center relative bg-white dark:bg-dark-blue w-[240px] h-[50px] p-2 px-4 rounded-md shadow-md focus:outline-none"
            onClick={handleSelectClick}
         >
            <p className="text-black dark:text-v-light-gray">{value || 'Filter by Region'}</p>
            <RiArrowDownSLine className="text-dark-gray dark:text-light-gray hover:dark:text-v-light-gray hover:text-black" />
         </div>
         {isOpen && (
            <ul className="absolute left-0 w-full overflow-hidden bg-white dark:bg-dark-blue text-center rounded-md shadow-md top-full mt-1">
               {options.map((option) => (
                  <li
                     key={nanoid()}
                     className="duration-75 hover:bg-v-light-gray hover:dark:bg-v-dark-blue-dark dark:text-v-light-gray py-3 h-[50px] cursor-pointer"
                     onMouseDown={() => handleOptionMouseDown(option.value)}
                  >
                     {option.label}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
});

export default Select;
