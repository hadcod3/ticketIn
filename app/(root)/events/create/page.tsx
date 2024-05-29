import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server";

export default async function CreateEvent() {
    const user = await currentUser()
    const userId = user?.publicMetadata.userId as string;
    (console.log("userId : ",userId))
    
    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h3-bold text-center sm:text-left">
                    Create Events
                </h3>
            </section>

            <div className="wrapper my-8">
                <EventForm userId={userId} type="Create"/>
            </div>
        </>
    )
}
