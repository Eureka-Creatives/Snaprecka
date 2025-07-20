"use client";

import { Drawer } from "vaul";

export default function VaulDrawer({
  children,
  setIsOpen,
  isOpen,
}: {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  return (
    <Drawer.Root direction="bottom" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className="w-5.5 h-5.5 cursor-pointer">
        <img
          src="https://placehold.co/600x400?text=Hello+World"
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/20 hidden max-lg:block" />
        <Drawer.Content className="bg-white h-[500px] w-full fixed bottom-0 left-0 right-0 outline-none hidden max-lg:block z-[60] font-md">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
