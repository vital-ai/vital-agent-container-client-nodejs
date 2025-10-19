import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency
 */
export class HaleyEnhancementRuleDependency extends VITAL_Node {
  public enhancementRuleEnablement?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRuleDependency';
  }

  /**
   * Get property definitions for HaleyEnhancementRuleDependency
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleEnablement',
        tsPropertyName: 'enhancementRuleEnablement',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
