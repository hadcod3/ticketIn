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
