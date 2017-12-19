import EventEmitter from 'eventemitter3';

/**
 * Basic event bus as state machine until we figure out best way to handle app state with and without Gutenberg
 */
const EventBus = new EventEmitter();

export default EventBus;