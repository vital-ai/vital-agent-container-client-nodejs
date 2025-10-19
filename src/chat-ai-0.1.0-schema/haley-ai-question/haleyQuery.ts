import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuery
 */
export class HaleyQuery extends VITAL_Node {
  public haleyQueryContainerRequest?: boolean;
  public haleyQueryJSON?: string;
  public haleyQueryAggregationOnlyRequest?: boolean;
  public haleyQueryName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQuery';
  }

  /**
   * Get property definitions for HaleyQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryContainerRequest',
        tsPropertyName: 'haleyQueryContainerRequest',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryJSON',
        tsPropertyName: 'haleyQueryJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQueryAggregationOnlyRequest',
        tsPropertyName: 'haleyQueryAggregationOnlyRequest',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryName',
        tsPropertyName: 'haleyQueryName',
        type: 'string',
        required: false
      }
    ];
  }


}
