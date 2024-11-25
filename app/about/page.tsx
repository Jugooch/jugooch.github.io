import { DetailedAbout } from '@/components/detailed-about';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from "next/link";
import {HomeIcon} from "lucide-react";
import {About} from "@/components/about";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
                    >
                        <HomeIcon className="w-4 h-4"/>
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
            <About />
            <DetailedAbout/>
            <Footer/>
        </div>
    );
}