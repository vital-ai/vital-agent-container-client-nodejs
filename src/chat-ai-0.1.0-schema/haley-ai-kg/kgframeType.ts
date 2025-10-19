import { KGType } from './kgtype';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFrameType
 */
export class KGFrameType extends KGType {
  public kGFrameTypeExternIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGFrameType';
  }

  /**
   * Get property definitions for KGFrameType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameTypeExternIdentifier',
        tsPropertyName: 'kGFrameTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
