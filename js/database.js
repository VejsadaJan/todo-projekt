/**
 * IMPORTS
 */
import { createClient } from '@supabase/supabase-js';


/**
 * CONNECT TO DATABASE
 */ 
const supabaseUrl = 'https://yebmnqoazqlfgriinkdg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllYm1ucW9henFsZmdyaWlua2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMzk5MDAsImV4cCI6MjA0NzYxNTkwMH0.lPML-Ak_HCLYjPW2xK1BqAJy3NQHYabVXRC0rxk6IGA';
const supabase = createClient(supabaseUrl, supabaseKey); 

/* appwrite

import { Client } from 'appwrite';

const client = new Client();
client.setProject('67430862002f1a00b7e1');

*/



/**
 * FETCH ALL CARDS FROM SERVER
 */
export async function fetchCards() {
	let { data: cards, error } = await supabase
		.from('cards')
		.select('*');

	// oops!!
	if (error) {
		console.error(error);
		return false;
	}

	return cards;
}


/**
 * FETCH ONE CARD
 */
export async function fetchCard(id) {
	let { data: cards, error } = await supabase
		.from('cards')
		.select('*')
		.eq('id', id)

	// oops!!
	if (error) {
		console.error(error);
		return false;
	}

	return cards;
}


/**
 * INSERT NEW CARD
 */
export async function insertCard(title, content) {
	const { data, error } = await supabase
		.from('cards')
		.insert([
			{ title, content },
		])
		.select();

	// oops!!
	if (error) {
		console.error(error.message);
		return false;
	};

	return data;
}


/**
 * UPDATE CARD
 */
export async function updateCard(id, title, content) {
	const { data, error } = await supabase
		.from('cards')
		.update({
			title, content
		})
		.eq('id', id)
		.select()

	// oops!! handle this better 
	if (error) {
		console.error(error.message);
		return false;
	};

	return data;
}


/**
 * DELETE CARD 
 */
export async function deleteCard(id) {
	const { error } = await supabase
		.from('cards')
		.delete()
		.eq('id', id)

	// oops!!
	if (error) {
		console.error(error.message);
		return false;
	};

	return true;
}
