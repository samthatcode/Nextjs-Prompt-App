import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try {
        console.log('Connecting to database...');
        await connectToDB();

        console.log('Fetching all prompts...');
        const prompts = await Prompt.find({}).populate('creator');

        console.log('Returning response...');
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error('Failed to fetch all prompts:', error);
        return new Response('Failed to fetch all prompts', { status: 500 });
    }
}
