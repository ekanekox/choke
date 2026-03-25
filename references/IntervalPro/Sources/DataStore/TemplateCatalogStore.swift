import Foundation
import IntervalModels

public actor TemplateCatalogStore {
    private var curatedTemplates: [WorkoutTemplate]

    public init(seedTemplates: [WorkoutTemplate] = []) {
        self.curatedTemplates = seedTemplates
    }

    public func setTemplates(_ templates: [WorkoutTemplate]) {
        curatedTemplates = templates
    }

    public func templates() -> [WorkoutTemplate] {
        curatedTemplates
    }
}
