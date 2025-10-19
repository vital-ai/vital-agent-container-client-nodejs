import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGType
 */
export class KGType extends VITAL_Node {
  public kGTypeVersion?: string;
  public kGraphDescription?: string;
  public kGModelVersion?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGType';
  }

  /**
   * Get property definitions for KGType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTypeVersion',
        tsPropertyName: 'kGTypeVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription',
        tsPropertyName: 'kGraphDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion',
        tsPropertyName: 'kGModelVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
