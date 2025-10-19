import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFrameProtoType
 */
export class KGFrameProtoType extends KGNode {
  public kGFrameTypeExternIdentifier?: string;
  public kGFrameType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGFrameProtoType';
  }

  /**
   * Get property definitions for KGFrameProtoType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameTypeExternIdentifier',
        tsPropertyName: 'kGFrameTypeExternIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameType',
        tsPropertyName: 'kGFrameType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
