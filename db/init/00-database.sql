\connect smooms;

CREATE TABLE public.category (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    name TEXT,
    color TEXT
);

CREATE TABLE public.message (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT
);

CREATE TABLE public.tag (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    name TEXT,
    category_id INTEGER NOT NULL CONSTRAINT tag_category_id_fkey REFERENCES public.category(id) ON DELETE CASCADE
);

CREATE TABLE public.message_tag (
    message_id INTEGER NOT NULL CONSTRAINT message_tag_message_id_fkey REFERENCES public.message(id) ON DELETE CASCADE,
    tag_id INTEGER NOT NULL CONSTRAINT message_tag_tag_id_fkey REFERENCES public.tag(id) ON DELETE CASCADE
);

ALTER TABLE message_tag ADD CONSTRAINT messagefk FOREIGN KEY (message_id) REFERENCES message (id) ON DELETE CASCADE;

ALTER TABLE message_tag ADD CONSTRAINT tagfk FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE;

ALTER TABLE tag ADD CONSTRAINT categoryfk FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE;

