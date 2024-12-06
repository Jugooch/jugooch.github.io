"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CharacterCanvas } from "./canvas";

interface CharacterCreatorModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave: (imageData: string) => void;
}

export function CharacterCreatorModal({
                                          open,
                                          onOpenChange,
                                          onSave,
                                      }: CharacterCreatorModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Create Your Space Character</DialogTitle>
                </DialogHeader>
                <CharacterCanvas onSave={(imageData) => {
                    onSave(imageData);
                    onOpenChange(false);
                }} />
            </DialogContent>
        </Dialog>
    );
}