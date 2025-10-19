import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQuery
 */
export class KGQuery extends VITAL_Node {
  public kGQueryIdentifier?: string;
  public kGQueryJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGQuery';
  }

  /**
   * Get property definitions for KGQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryIdentifier',
        tsPropertyName: 'kGQueryIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryJSON',
        tsPropertyName: 'kGQueryJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
