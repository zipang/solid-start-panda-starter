import type { APIEvent } from "@solidjs/start/server";
import { auth } from "@lib/auth";

/**
 * Solid Start API routes receive an API Event
 * @see https://docs.solidjs.com/solid-start/building-your-application/api-routes#writing-an-api-route
 * @param event APIEvent
 * @returns Promise<Response>
 */
const authHandler = async (event: APIEvent) => auth.handler(event.request);

/**
 * Handle any API routes:
 * GET /api/auth/*
 * POST /api/auth/*
 */
export const GET = authHandler;
export const POST = authHandler;
