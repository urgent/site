\connect smooms;

CREATE TABLE public.category (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    name TEXT,
    color TEXT
);

CREATE TABLE public.message (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    content TEXT
);

CREATE TABLE public.tag (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    name TEXT,
    category_id INTEGER NOT NULL CONSTRAINT tag_category_id_fkey REFERENCES public.category(id)
);

CREATE TABLE public.message_tag (
    message_id INTEGER NOT NULL CONSTRAINT message_tag_message_id_fkey REFERENCES public.message(id),
    tag_id INTEGER NOT NULL CONSTRAINT message_tag_tag_id_fkey REFERENCES public.tag(id)
);