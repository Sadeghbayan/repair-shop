import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    if (!customerId) {
      return <div>No customer ID provided</div>;
    }
    const customer = await getCustomer(parseInt(customerId));
    if (!customer) {
      return (
        <>
          <h2 className="text-2xl font-bold mb-2">Customer not found</h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }
    console.log(customer);
    return <div>{customer.firstName}</div>;
  } catch (error) {
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }
  }
}
