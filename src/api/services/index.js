import services from "../../data/services.json";

export async function get({ params }) {
    const { id } = params;
    const services = await getService(id);

    if (!services) {
        return new Response(null, {
            status: 404,
            statusText: "Not found"
        });
    }
    return new Response(JSON.stringify(services), {
        status: 200
    });
}

export async function getService(id) {
    return services.find((service) => service.id === id);
}
