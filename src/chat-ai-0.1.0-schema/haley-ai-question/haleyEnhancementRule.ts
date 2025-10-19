import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRule
 */
export class HaleyEnhancementRule extends VITAL_Node {
  public enhancementDescription?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyEnhancementRule';
  }

  /**
   * Get property definitions for HaleyEnhancementRule
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasEnhancementDescription',
        tsPropertyName: 'enhancementDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
