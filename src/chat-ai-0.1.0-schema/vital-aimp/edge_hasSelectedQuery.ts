import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasSelectedQuery
 */
export class Edge_hasSelectedQuery extends VITAL_TaxonomyEdge {
  public globalQuery?: boolean;
  public selectedQueryName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasSelectedQuery';
  }

  /**
   * Get property definitions for Edge_hasSelectedQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalQuery',
        tsPropertyName: 'globalQuery',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSelectedQueryName',
        tsPropertyName: 'selectedQueryName',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSelectedQuery
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasSelectedQuery';
  }
}
