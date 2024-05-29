import EventForm from "@/components/shared/EventForm"
import { auth, currentUser } from "@clerk/nextjs"

export default async function UpdateEvent() {
    const user = await currentUser()
    const userId = user?.publicMetadata.userId as string;

    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">
                    Update Events
                </h3>
            </section>

            <div className="wrapper my-8">
                <EventForm userId={userId} type="Update"/>
            </div>
        </>
    )
}

