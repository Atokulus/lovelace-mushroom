import { CoverEntity } from "../../ha";

export function getPosition(entity: CoverEntity) {
    return entity.attributes.current_position != null
        ? Math.round(entity.attributes.current_position)
        : undefined;
}

export function getTiltPosition(entity: CoverEntity) {
    return entity.attributes.current_tilt_position != null
        ? Math.round(entity.attributes.current_tilt_position)
        : undefined;
}

export function getStateColor(entity: CoverEntity) {
    const state = entity.state;
    if (state === "open" || state === "opening") {
        return "var(--rgb-state-cover-open)";
    }
    if (state === "closed" || state === "closing") {
        return "var(--rgb-state-cover-closed)";
    }
    return "var(--rgb-disabled)";
}

export function getTiltStateColor(entity: CoverEntity) {
    const tilt = entity.attributes.current_tilt_position;
    if (tilt > 0) {
        return "var(--rgb-state-cover-tilt-open)";
    }
    else {
        return "var(--rgb-state-cover-tilt-closed)";
    }
}
