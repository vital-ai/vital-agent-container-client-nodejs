import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInPost
 */
export class LinkedInPost extends VITAL_Node {
  public linkedInJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LinkedInPost';
  }

  /**
   * Get property definitions for LinkedInPost
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInJSON',
        tsPropertyName: 'linkedInJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
