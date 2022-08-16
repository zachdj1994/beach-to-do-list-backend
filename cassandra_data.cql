-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS to_do_list WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Create a table
CREATE TABLE IF NOT EXISTS to_do_list.list_items (
id uuid PRIMARY KEY,
text text,
);

-- Insert some data
INSERT INTO to_do_list.list_items
(id, text)
VALUES (uuid(), 'Vibe');
INSERT INTO to_do_list.list_items
(id, text)
VALUES (uuid(), 'Listen to the Pina Colada song or something?');
INSERT INTO to_do_list.list_items
(id, text)
VALUES (uuid(), 'SUNSCREEN DON''T FORGET AGAIN');
INSERT INTO to_do_list.list_items
(id, text)
VALUES (uuid(), 'ooh, dolphins!!!');
INSERT INTO to_do_list.list_items
(id, text)
VALUES (uuid(), 'Aloe vera (I forgot sunscreen again)');
