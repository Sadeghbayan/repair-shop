import { getTicket } from "@/lib/queries/getTicket";
import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    if (!customerId && !ticketId) {
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            No customer or ticket ID provided
          </h2>
          <BackButton title="Go Back" variant="default" />
        </div>
      );
    }

    // new Ticket
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Customer not found</h2>
            <BackButton title="Go Back" variant="default" />
          </div>
        );
      }
      if (!customer.active) {
        return (
          <div>
            <h2 className="text-2xl font-bold">Customer is not active</h2>
            <BackButton title="Go Back" variant="default" />
          </div>
        );
      }

      // return ticket form
      console.log(customer);
    }

    // edit Ticket
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Ticket not found</h2>
            <BackButton title="Go Back" variant="default" />
          </div>
        );
      }
      const customer = await getCustomer(ticket.customerId);

      // return ticket form
      console.log("ticket", ticket);
      console.log("customer", customer);
    }
  } catch (error) {
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }
  }
}
