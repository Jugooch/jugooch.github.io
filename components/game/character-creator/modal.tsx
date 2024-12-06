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
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${open ? 'visible' : 'invisible'}`}>
            <div className="w-full max-w-[90vw] sm:max-w-[600px] max-h-[90vh] overflow-auto bg-white shadow-lg p-4 rounded-lg">
                <Dialog open={open} onOpenChange={onOpenChange}>
                    <DialogContent className="p-3">
                        <DialogHeader>
                            <DialogTitle>Create Your Space Character</DialogTitle>
                        </DialogHeader>
                        <CharacterCanvas onSave={(imageData) => {
                            onSave(imageData);
                            onOpenChange(false);
                        }} />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}