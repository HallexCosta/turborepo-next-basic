import {Achievement} from "../stores/achievements-store";

export const achievementEntityToAchievementComponentMapper = (achievement) => ({
    id: achievement.id,
    content: achievement.content,
    withDot: achievement.withDot
})