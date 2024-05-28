import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from '@/types';
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css"
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const events = await getAllEvents({
        query: searchText,
        category,
        page,
        limit: 3
    })

    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="h1-bold">
                            Make your dream wedding come true with us!
                        </h1>
                        <p className="p-regular-20 md:p-regular-24">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus optio magnam sint veniam nulla error vero amet nostrum accusamus.
                        </p>
                        <Button size="lg" asChild className="button w-full sm:w-fit">
                            <Link href="#events">Explore Now</Link>
                        </Button>
                    </div>
                    <Image
                        src="/assets/images/flower.png"
                        alt="flower"
                        width={1200}
                        height={1200}
                        className="max-h-[70vh] object-contain object-center 2xl:max-h-[80vh]"
                    />
                </div>
            </section>

            <section id="events" className="wrapper my-8 flex flex-col md:gap-12">
                <h2 className="h2-bold">Trusted by <br/> Thousands of Events</h2>
                <div className="flex w-full flex-col gap-5 md:flex-row">
                    <Search />
                    <CategoryFilter/>
                </div>
                <Collection
                data={events?.data}
                emptyTitle="No Events Found"
                emptyStateSubtext="Check later"
                collectionType="All_Events"
                limit={3}
                page={page}
                totalPages={events?.totalPages}
                />
            </section>
        </>
    );
}
