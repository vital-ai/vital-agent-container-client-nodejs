import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpNormalizedEntity
 */
export class NlpNormalizedEntity extends VITAL_Node {
  public context?: string;
  public symbol?: string;
  public nameVariants?: string;
  public heightPx?: number;
  public imageDate?: string | Date;
  public ticker?: string;
  public shortname?: string;
  public nlpEntityCategory?: string;
  public entityType?: string;
  public widthPx?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#NlpNormalizedEntity';
  }

  /**
   * Get property definitions for NlpNormalizedEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContext',
        tsPropertyName: 'context',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSymbol',
        tsPropertyName: 'symbol',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNameVariants',
        tsPropertyName: 'nameVariants',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasHeightPx',
        tsPropertyName: 'heightPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasImageDate',
        tsPropertyName: 'imageDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTicker',
        tsPropertyName: 'ticker',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasShortname',
        tsPropertyName: 'shortname',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNlpEntityCategory',
        tsPropertyName: 'nlpEntityCategory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityType',
        tsPropertyName: 'entityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasWidthPx',
        tsPropertyName: 'widthPx',
        type: 'number',
        required: false
      }
    ];
  }


}
