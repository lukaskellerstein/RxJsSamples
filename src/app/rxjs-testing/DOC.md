# Description

We are trying always avoid nested subscriptions, so we need some `Flattening strategy`.

## MERGE

**Merge Strategy** — deciding not to do anything, basically, we just keep subscribing to every new observable that we return from the map.

## SWITCH

**Switch Strategy** — unsubscribing from the last mapped observable, when the new one arrives.

## EXHAUST

**Exhaust strategy** — the “don’t interrupt me” strategy, ignores (and never subscribe to) any new mapped Observable while the current Observable is still emitting values.

## CONCAT

**Concat Strategy** —Queuing up every new Observable, and subscribing to a new observable only when the last observable completed.
