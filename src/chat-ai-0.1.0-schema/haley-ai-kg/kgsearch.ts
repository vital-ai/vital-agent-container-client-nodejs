import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSearch
 */
export class KGSearch extends KGNode {
  public kGSearchType?: string;
  public kGSearchDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSearch';
  }

  /**
   * Get property definitions for KGSearch
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSearchType',
        tsPropertyName: 'kGSearchType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSearchDateTime',
        tsPropertyName: 'kGSearchDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
