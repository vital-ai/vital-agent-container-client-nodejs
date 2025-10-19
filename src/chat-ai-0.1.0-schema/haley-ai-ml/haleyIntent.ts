import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyIntent
 */
export class HaleyIntent extends VITAL_Node {
  public modelIntentIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyIntent';
  }

  /**
   * Get property definitions for HaleyIntent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasModelIntentIdentifier',
        tsPropertyName: 'modelIntentIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
